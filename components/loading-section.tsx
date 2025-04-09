import { Loader2 } from "lucide-react"

interface LoadingSectionProps {
  title: string
}

export default function LoadingSection({ title }: LoadingSectionProps) {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 text-purple-500 animate-spin" />
        <span className="ml-2 text-zinc-400">Loading...</span>
      </div>
    </section>
  )
}
