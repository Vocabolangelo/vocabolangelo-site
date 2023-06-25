import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts'

export default function MonthWords() {

    const data = [
        {
            name: 'Page A',
            parolangelo: 4000,
            slangelo: 2400,
        },
        {
            name: 'Page B',
            parolangelo: 3000,
            slangelo: 1398,
        }
    ]

    // useEffect(() => {
    //
    // }, [])

    return <ResponsiveContainer width="100%" height="100%">
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="parolangelo" fill="#8884d8" />
            <Bar dataKey="slangelo" fill="#82ca9d" />
        </BarChart>
    </ResponsiveContainer>
}
