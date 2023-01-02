import React from 'react'
import { toast } from 'react-hot-toast'

const toaster =(type,message)=> {
    switch (type) {
        case 'error':
            return toast.error(message)
            break;
    
        default:
            return toast.success(message)
            break;
    }
}
export {toaster}

