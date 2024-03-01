"use client"

import Link from "next/link"
import { BackgroundRadialLeft } from "../BackgroundRadialLeft"
import { Reveal } from "../Reveal"
import { dataFeaturesBusiness } from "./BestBusiness.data"
import Image from "next/image"

export function BestBusiness() {
    return (
        <div className="relative px-6 py-20 md:py-64" id="features">
            <Reveal>
                <h2 className="text-5xl font-semibold">Menu
                    <span className="block degradedBlue bg-blueLight">Platos</span>
                </h2>
            </Reveal>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-100 dark:text-gray-400">
                    <thead className="text-lg uppercase text-gray-700  dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Menu
                            </th>
                            <th scope="col" className="hidden lg:table-cell px-6 py-3">
                                Tiempo
                            </th>
                            <th scope="col" className="hidden lg:table-cell px-6 py-3">
                                Categoria
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Presio
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="px-6 py-4 whitespace-nowrap dark:text-white">
                                Pollo al curry
                            </th>
                            <td className="hidden lg:table-cell px-6 py-4">
                                20m
                            </td>
                            <td className="hidden lg:table-cell px-6 py-4">
                                almuerzo
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-6 py-4 whitespace-nowrap dark:text-white">
                                Paella marinera
                            </th>
                            <td className="hidden lg:table-cell px-6 py-4">
                                40m
                            </td>
                            <td className="hidden lg:table-cell px-6 py-4">
                                almuerzo
                            </td>
                            <td className="px-6 py-4">
                                $1999
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-6 py-4 whitespace-nowrap dark:text-white">
                                Sushi variado
                            </th>
                            <td className="hidden lg:table-cell px-6 py-4">
                                15m 
                            </td>
                            <td className="hidden lg:table-cell px-6 py-4">
                                almuerzo
                            </td>
                            <td className="px-6 py-4">
                                $199
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-6 py-4 whitespace-nowrap dark:text-white">
                                Lasaña de carne
                            </th>
                            <td className="hidden lg:table-cell px-6 py-4">
                                15m 
                            </td>
                            <td className="hidden lg:table-cell px-6 py-4">
                                almuerzo
                            </td>
                            <td className="px-6 py-4">
                                $1543
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-6 py-4 whitespace-nowrap dark:text-white">
                                Pasta Alfredo
                            </th>
                            <td className="hidden lg:table-cell px-6 py-4">
                                25m 
                            </td>
                            <td className="hidden lg:table-cell px-6 py-4">
                                almuerzo
                            </td>
                            <td className="px-6 py-4">
                                $3599
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-6 py-4 whitespace-nowrap dark:text-white">
                                Hamburguesa gourmet
                            </th>
                            <td className="hidden lg:table-cell px-6 py-4">
                                15m 
                            </td>
                            <td className="hidden lg:table-cell px-6 py-4">
                                almuerzo
                            </td>
                            <td className="px-6 py-4">
                                $2499
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-6 py-4 whitespace-nowrap dark:text-white">
                                Pollo al curry
                            </th>
                            <td className="hidden lg:table-cell px-6 py-4">
                                20m
                            </td>
                            <td className="hidden lg:table-cell px-6 py-4">
                                almuerzo
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-6 py-4 whitespace-nowrap dark:text-white">
                                Paella marinera
                            </th>
                            <td className="hidden lg:table-cell px-6 py-4">
                                40m
                            </td>
                            <td className="hidden lg:table-cell px-6 py-4">
                                almuerzo
                            </td>
                            <td className="px-6 py-4">
                                $1999
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-6 py-4 whitespace-nowrap dark:text-white">
                                Sushi variado
                            </th>
                            <td className="hidden lg:table-cell px-6 py-4">
                                15m 
                            </td>
                            <td className="hidden lg:table-cell px-6 py-4">
                                almuerzo
                            </td>
                            <td className="px-6 py-4">
                                $199
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-6 py-4 whitespace-nowrap dark:text-white">
                                Lasaña de carne
                            </th>
                            <td className="hidden lg:table-cell px-6 py-4">
                                15m 
                            </td>
                            <td className="hidden lg:table-cell px-6 py-4">
                                almuerzo
                            </td>
                            <td className="px-6 py-4">
                                $1543
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-6 py-4 whitespace-nowrap dark:text-white">
                                Pasta Alfredo
                            </th>
                            <td className="hidden lg:table-cell px-6 py-4">
                                25m 
                            </td>
                            <td className="hidden lg:table-cell px-6 py-4">
                                almuerzo
                            </td>
                            <td className="px-6 py-4">
                                $3599
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-6 py-4 whitespace-nowrap dark:text-white">
                                Hamburguesa gourmet
                            </th>
                            <td className="hidden lg:table-cell px-6 py-4">
                                15m 
                            </td>
                            <td className="hidden lg:table-cell px-6 py-4">
                                almuerzo
                            </td>
                            <td className="px-6 py-4">
                                $2499
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
