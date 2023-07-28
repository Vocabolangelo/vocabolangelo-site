export class DateUtility {

    static compareFnString(a: string, b: string) {
        return new Date(b).getTime() - new Date(a).getTime()
    }

    static compareFn(a: Date, b: Date) {
        return b.getTime() - a.getTime()
    }

    static toDateString(date: Date){
        const d = date.getDate()
        const m = date.getMonth() + 1
        return `${d < 10 ? '0' + d : d}/${m < 10 ? '0' + m : m}/${date.getFullYear()}`
    }

}
