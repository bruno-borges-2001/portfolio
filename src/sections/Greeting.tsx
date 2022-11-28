interface GreetingSectionProps {
  personalInfo?: {
    name: string;
    role: string;
  }
}

export default function GreetingSection({ personalInfo }: GreetingSectionProps) {
  return (
    <div>
      <h1 className="title">Hello, I&apos;m {personalInfo?.name}!</h1>
      <p className="subtitle">{personalInfo?.role}</p>
    </div>
  )
}