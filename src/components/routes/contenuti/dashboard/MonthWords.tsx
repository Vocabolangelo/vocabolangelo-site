import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts'
import moment from 'moment'
import {Parolangelo} from '../../../../rdf/types/Parolangelo'
import React, {useEffect, useState} from 'react'
import InnerWrapper from '../../../common/story/InnerWrapper'

export default function MonthWords() {

    const [data, setData] =
        useState<{ name: string; parolangelo: string }[]>([])

    useEffect(() => {
        Parolangelo.all().then(parolangelo => {
            const monthsMap = parolangelo.reduce((map, obj) => {
                const date = obj.created ? new Date(obj.created) : null
                const key = date ? `${moment.months().at(date.getMonth())?.slice(0,3)} ${date.getFullYear()}` : '??'
                if (!map.has(key)) {
                    map.set(key, 0)
                }
                map.set(key, map.get(key) + 1)
                return map
            }, new Map())
            const result = Array.from(monthsMap, ([name, parolangelo]) => ({ name, parolangelo }))
            setData(result)
        })
    }, [])

    return <InnerWrapper style={1}>
        <header>
            <h2>Distribuzione delle Parolangelo</h2>
            <p className={'major'}>Quante parolangelo sono state create ogni mese?</p>
            <p>
                Questo grafico a barre mostra quante parolangelo sono state create ogni mese in anno.
            </p>
        </header>
        <div className="index align-left">
            <ResponsiveContainer  width={'100%'} height={400}>
                <BarChart data={data }>
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="parolangelo" fill="#6F4E37" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </InnerWrapper>
}
