import { Button } from "../../@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "../../@/components/ui/card"
import GithubIcon from "../../@/components/ui/icon/githubicon"
import UserIcon from "../../@/components/ui/icon/usericon"
import { useAtom } from "jotai";
import { authorize, step } from "@/store/JotaiStore";
export default function Authorize() {
    const [auth, setAuth] = useAtom(authorize)
    const [wizardStep, setStep] = useAtom(step)

    const handleAuth = () => {

    }
    return (
        <Card className="min-h-80">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <UserIcon className="w-6 h-6 mr-2" />
                    <CardTitle>OAuth Authorization</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
                <div className="flex items-center space-x-2">
                    <GithubIcon className="w-10 h-10" />
                    <div className="flex flex-col">
                        <span>Authorize the application with GitHub</span>
                    </div>
                </div>
                <Button className="mt-4 bg-black text-white cursor-pointer"
                    onClick={handleAuth}>
                    Authorize
                </Button>
            </CardContent>
        </Card >
    )
}
