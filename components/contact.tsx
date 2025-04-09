"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send, Github, Linkedin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real application, you would send this data to your server
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <Mail className="mr-2 text-purple-500" />
        Contact Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-zinc-100">Get In Touch</h3>
          <p className="text-zinc-400 mb-6">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you have any questions or
            just want to say hello!
          </p>
          <div className="space-y-4">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                <Mail className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <p className="text-zinc-400">Email</p>
                <p className="text-zinc-100">arnav.chugh02@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                <Phone className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <p className="text-zinc-400">Phone</p>
                <p className="text-zinc-100">+91 9311411866</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                <Github className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <p className="text-zinc-400">GitHub</p>
                <a
                  href="https://github.com/ArnavChugh02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-100 hover:text-purple-400 transition-colors"
                >
                  github.com/ArnavChugh02
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                <Linkedin className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <p className="text-zinc-400">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/Arnav-Chugh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-100 hover:text-purple-400 transition-colors"
                >
                  linkedin.com/in/Arnav-Chugh
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-zinc-400 mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-zinc-800 border-zinc-700 text-zinc-100 focus:border-purple-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-zinc-400 mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-zinc-800 border-zinc-700 text-zinc-100 focus:border-purple-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-zinc-400 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-zinc-800 border-zinc-700 text-zinc-100 focus:border-purple-500"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
