import { FC } from "react"
import PageProps from "./page.types"
import { Footer, Header } from "../"

const Page:FC<PageProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow py-8 px-8 sm:px-16 md:px-24">
      {children}
    </main>
    <Footer />
  </div>
)

export default Page;
