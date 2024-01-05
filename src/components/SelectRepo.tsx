import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Card, CardContent, CardHeader, CardTitle } from '../../@/components/ui/card'
import { Button } from './ui/button'
import { GoRepo } from "react-icons/go";
export function SelectRepo() {
    return (
        <Card className="min-h-80">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <GoRepo className="h-6 w-6" />
                    <CardTitle>Select  Repository</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button disabled variant="outline">
                            Select a Repository
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
