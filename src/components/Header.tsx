import "./Header.css"
import { Separator } from "./ui/separator"
const Header = () => {

  const HeaderItem = (title: string, value?: string) => {
    return(
      <div className="flex gap-4 mt-4">
        <h1>{title}</h1>
        <p>{value}</p>
      </div>
    )
  }
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="aspect-square border rounded-2xl"></div>
      <div className="mt-8 flex flex-col">
        <h1 className="text-7xl font-semibold">Hi there! <span id="hand">👋</span></h1>
        <div className="mt-4">
          <p className="">Get to know me: </p>
          {HeaderItem("Name:","Ferenc Wágner")}
          <Separator className="mt-4"/>
          {HeaderItem("Age:","19 years")}
          <Separator className="mt-4"/>
          {HeaderItem("Current position:","Software Engineering Student")}
          <Separator className="mt-4"/>
          {HeaderItem("Man of many interests:")}
          <ul className="flex flex-col gap-4">
            <li className="pl-2 mt-4">Basketball Officiating</li>
            <li className="pl-2 ">Esports Coach</li>
            <li className="pl-2 ">Graphic Designer</li>
            <li>See more at <a href="#" className="underline underline-offset-4 hover:cursor-pointer">Hobbys & Interests</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header