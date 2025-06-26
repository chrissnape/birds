import { FC } from "react"
import PageProps from "./page.types"

const Page:FC<PageProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <main className="flex-grow py-8 px-32">
      {children}
    </main>
  </div>
)

export default Page;
