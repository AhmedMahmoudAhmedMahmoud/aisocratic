'use client'
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { Button } from './ui/button';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from './ui/dropdown-menu';
import { User } from 'next-auth';
import { userAgent } from 'next/server';
import { signOut } from 'next-auth/react';
import { LogIn, LogOut } from 'lucide-react';
import UserAvatar from './UserAvatar';

type Props = {
    user: User
};

const UserAccountNav = ({user}: Props) =>{
    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar user = {user}/>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
            <div className="flex flex-col space-y-1 leading-none">               
            {user?.name && (<p className="font-medium">{user.name}</p>)}
            {user?.email && (
                <p className="w-[200px] truncate text-sm text-secondary-foreground">
                    {user.email}
                </p>
            )}
            </div>
        </div>
                <DropdownMenuSeparator/>
                <DropdownMenuItem
                onSelect={()=>{
                    signOut();
                }}
                className="text-red-600 cursor-pointer"
                >
                    Sign Out
                    <LogOut className="w-4 h-4 ml-2"/>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserAccountNav;