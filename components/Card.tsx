import { Card } from '@/lib/constants'
import clsx from 'clsx'
export default function Card(props: Card) {
    return (
        <>
            <div className={clsx(`rounded-2xl p-4 break-words`)} style={{ width: `${props.width}`}}>
                <div className='text-4xl font-black text-red-300'>{props.title}</div>
                <div className='text-lg font-medium mt-4'>{props.detail}</div>
            </div>
        </>
    )
}