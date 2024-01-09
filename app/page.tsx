"use client"

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Card } from "@/components/ui/card";
import TableContent from "@/components/Table";
import { ChevronDownIcon} from '@radix-ui/react-icons'


const MainPage = () => {
    const [isMounted, setIsMounted] = useState(false)
    // fixing hydration error
    useEffect(() => {
        setIsMounted(true);
    },[]);

    if(!isMounted){
        return null;
    }
    return (
        <div className="absolute left-52 w-[81.8em] h-16 top-0">
            <Navbar />
            <div className="flex justify-between px-10 py-6">
                <div className="text-lg ">Overview</div>
                <div className="border-black-1">
                <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="outline">
                        Last Month <ChevronDownIcon className="ml-2 h-4 w-4" /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
                </div>
            </div>
            <div className="flex justify-center gap-3 px-10 py-2">
                <Card className="p-6 w-1/2 border-none bg-white shadow rounded-none">
                    <div className="flex flex-col gap-3">
                        Online orders
                        <div className="text-3xl font-semibold">
                            231
                        </div>
                    </div>
                </Card>
                <Card className="p-6 w-1/2 border-none bg-white shadow rounded-none">
                <div className="flex flex-col gap-3">
                        Amount received
                        <div className="text-3xl font-semibold">
                            ₹23,92,312.19
                        </div>
                    </div>
                </Card>
            </div>
            <div className="px-10 pt-4">
                <h2 className="text-xl">Transactions | This Month</h2>
            </div>
            <div className="p-10"><TableContent /></div>
        </div>
    )
    }
export default MainPage;