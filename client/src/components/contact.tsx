import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import type { z } from "zod";

type ContactFormData = z.infer<typeof insertContactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await contactMutation.mutateAsync(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-indigo-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">johnkrentschler@icloud.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <Phone className="text-cyan-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">Available upon request</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-gray-600">United States</p>
                  </div>
                </div>
              </div>
            </div>


          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Message</h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </Label>
                <Input
                  id="name"
                  {...form.register("name")}
                  placeholder="Enter your name"
                  className="w-full"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  placeholder="Enter your email"
                  className="w-full"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </Label>
                <Input
                  id="subject"
                  {...form.register("subject")}
                  placeholder="Enter subject"
                  className="w-full"
                />
                {form.formState.errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.subject.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  {...form.register("message")}
                  rows={5}
                  placeholder="Enter your message"
                  className="w-full resize-none"
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || contactMutation.isPending}
                className="w-full bg-indigo-600 hover:bg-indigo-700"
              >
                {isSubmitting || contactMutation.isPending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2" size={16} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
