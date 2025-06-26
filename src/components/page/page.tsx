import { FC } from "react"
import PageProps from "./page.types"
import { Footer, Header } from "../"

const Page:FC<PageProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow py-8 px-32">
      {children}
    </main>
    <Footer />
  </div>
)

export default Page;
