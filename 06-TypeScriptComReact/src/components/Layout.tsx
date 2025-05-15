import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ({ children }: any) => {
    return (
        <>
            <Box backgroundColor='#9413DC' minHeight={'90vh'} maxHeight={'90vh'}>
                <Header />

                <Box backgroundColor='#9413DC' minHeight={'80vh'} maxHeight={'80vh'} padding='25px'>

                    {children}

                </Box>

                <Footer />
            </Box>

        </>
    )
}