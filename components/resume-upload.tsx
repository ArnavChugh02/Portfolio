// "use client"

// import type React from "react"

// import { useState } from "react"
// import { FileText, Upload, Check } from "lucide-react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { parseResume } from "@/lib/resume-parser"
// import { useToast } from "@/hooks/use-toast"

// export default function ResumeUpload() {
//   const [isUploading, setIsUploading] = useState(false)
//   const [uploadSuccess, setUploadSuccess] = useState(false)
//   const { toast } = useToast()

//   const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0]
//     if (!file) return

//     // Check file type
//     const fileType = file.type
//     if (
//       fileType !== "application/pdf" &&
//       fileType !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
//     ) {
//       toast({
//         title: "Invalid file type",
//         description: "Please upload a PDF or DOCX file",
//         variant: "destructive",
//       })
//       return
//     }

//     setIsUploading(true)

//     try {
//       // In a real app, you would send this file to your server
//       // For demo purposes, we'll simulate a delay and then call the parser
//       await new Promise((resolve) => setTimeout(resolve, 1500))

//       // Parse the resume
//       const resumeData = await parseResume(file)

//       // Update the UI with the parsed data
//       // This would typically dispatch to a state manager or context
//       console.log("Resume data:", resumeData)

//       setUploadSuccess(true)
//       toast({
//         title: "Resume uploaded successfully",
//         description: "Your portfolio has been updated with your resume information",
//       })

//       // Reset the success state after a delay
//       setTimeout(() => {
//         setUploadSuccess(false)
//       }, 3000)
//     } catch (error) {
//       console.error("Error parsing resume:", error)
//       toast({
//         title: "Error parsing resume",
//         description: "There was an error parsing your resume. Please try again.",
//         variant: "destructive",
//       })
//     } finally {
//       setIsUploading(false)
//     }
//   }

//   return (
//     <Card className="bg-zinc-800 border-zinc-700 shadow-lg mb-12">
//       <CardHeader>
//         <CardTitle className="text-2xl flex items-center">
//           <FileText className="mr-2 text-purple-500" />
//           Resume Upload
//         </CardTitle>
//         <CardDescription className="text-zinc-400">
//           Upload your resume to automatically populate your portfolio
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-zinc-700 rounded-lg bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
//           <input
//             type="file"
//             id="resume-upload"
//             className="hidden"
//             accept=".pdf,.docx"
//             onChange={handleFileUpload}
//             disabled={isUploading}
//           />
//           <label htmlFor="resume-upload" className="cursor-pointer flex flex-col items-center">
//             {uploadSuccess ? (
//               <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
//                 <Check className="h-6 w-6 text-green-500" />
//               </div>
//             ) : (
//               <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
//                 <Upload className="h-6 w-6 text-purple-500" />
//               </div>
//             )}
//             <p className="text-lg font-medium text-zinc-300 mb-2">
//               {uploadSuccess
//                 ? "Resume uploaded successfully!"
//                 : isUploading
//                   ? "Uploading..."
//                   : "Click to upload your resume"}
//             </p>
//             <p className="text-sm text-zinc-500">Supports PDF, DOCX (Max 5MB)</p>
//           </label>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }
