"use client";


import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";


import { AlignLeftIcon } from "lucide-react";
import { NavMenu } from "./navbar";
import { Button } from "@/components/ui/button";




export function SheetLeftbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden flex">
          <AlignLeftIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 px-0" side="left">
        <SheetHeader>
          <SheetClose className="px-5" asChild></SheetClose>
        </SheetHeader>
        <ScrollArea className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-5 text-sm font-medium text-muted-foreground">
            <NavMenu />
           
          </div>
          
          
          
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}