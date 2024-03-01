"use client"
import Link from "next/link"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import { MotionTransition } from "../MotionTransition"
import Image from "next/image"
import { Reveal } from "../Reveal"


export function FirstBlock() {
    return (
        <div className="relative p-4 md:py-40">
            <BackgroundRadialRight />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h1 className="text-5xl font-semibold">
                            El nuevo
                            <span className="block degradedBlue bg-blueLight">
                                Rincón del Gusto
                            </span>
                            a tu alcance.
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Donde cada trago es un deleite y cada bocado una experiencia.</p>
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link href="#features" className="px-4 py-3 rounded-md bg-blueRadial">Empieza ahora</Link>
                        </div>
                    </Reveal>
                </div>
                <MotionTransition className="flex items-center justify-center">
                    <img className="imageBar" src="/assets/imageBar.png" />
                </MotionTransition>
            </div>
        </div>
    )
}
