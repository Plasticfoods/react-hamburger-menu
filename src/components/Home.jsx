import Header from "./Header";
import { Button } from "@/components/ui/button"

function Home() {
    return (
        <div className="home">
            <Header />
            <main>
                <div className="content grid gap-4">
                    <h1 className="text-3xl font-bold tracking-tight md:text-5xl text-center">
                        React Hamburger Menu
                    </h1>
                    <p className="text-xl text-muted-foreground text-center" style={{ maxWidth: '624px' }}>
                        This is a simple app with a hamburger menu in React, using the CSS library Shadcn-UI
                    </p>
                    <div className="flex justify-center">
                        <Button variant='secondary' className='text-base'>Get started</Button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home