import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import GitPullRequestIcon from '@/components/icon/githubpullrequesticon'
import { Button } from '@/components/ui/button'

export function SelectPullRequest() {
    return (
        <Card className="min-h-80">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <GitPullRequestIcon className="w-6 h-6 mr-2" />
                    <CardTitle>Select Pull Request</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button disabled variant="outline">
                            Select Pull Request ..
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-64">
                        <DropdownMenuLabel>My Repositories</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>Repo1</DropdownMenuItem>
                            <DropdownMenuItem>Repo2</DropdownMenuItem>
                            <DropdownMenuItem>Repo3</DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardContent>
        </Card >
    )
}
