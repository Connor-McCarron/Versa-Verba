"use client"

import { Card } from "@/components/ui/card";
import { ArrowRight, MessageSquare, Music2Icon, Settings, VideoIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: 'ModelA',
    icon: MessageSquare,
    href: '/text',
    color: "text-violet-500",
    bgColor: "text-violet-500/10"
  },
  {
    label: 'ModelB',
    icon: Music2Icon,
    href: '/audio',
    color: "text-pink-700",
    bgColor:"text-pink-700/10"
  },
  {
    label: 'ModelC',
    icon: VideoIcon,
    href: '/video',
    color: "text-green-700",
    bgColor:"text-green-700/10"
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/dashboard'
  }
]

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore My Final Year Project
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Dashboard for final year project AI translation models
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card 
          onClick={() => router.push(tool.href)}
          key={tool.href} 
          className="p-4 border-black/5 flex items-center
          justify-between hover:shadow-md transition 
          cursor-pointer">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
