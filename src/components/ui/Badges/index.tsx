import { tv } from "tailwind-variants";

interface IBadge{
    status: "default" | "info" | "warning" | "success" | "error";
    className?: string;
}

interface TVProps{
    status:ColorScheme;
}

interface ColorScheme {
    default: string;
    info: string;
    warning: string;
    success: string;
    error:string;
}

const badgesVariants = tv<TVProps, any, any, any>({
    variants:{
        status:{
            default: "bg-accent-600",
            info: "bg-info-200",
            warning: "bg-warning-200",
            success: "bg-success-200",
            error:"bg-error-200",
        }
    }
})

export const Badge = ({
    status,
    className
}:IBadge) => {
    return<div className={"rounded-xl w-2 h-2 " + badgesVariants({status:status}) + " " + className}></div>
}