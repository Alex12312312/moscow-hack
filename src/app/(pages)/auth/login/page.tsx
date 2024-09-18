'use client'

import { AuthModal } from "@/components/ui/AuthModal"
import { useState } from "react";

export default function LoginForm() {
    const [active, setActive] = useState(true);
    return <AuthModal active={active} setActive={setActive}></AuthModal>
    
}