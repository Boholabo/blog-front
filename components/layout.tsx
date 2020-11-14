import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import {FC, ReactNode} from "react";

type Props = {
  preview?: boolean
  children: ReactNode
}

const Layout: FC<Props> = ({ preview, children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
