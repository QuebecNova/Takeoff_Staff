export default function stringIsValid(
    str: string,
    str2?: string,
    str3?: string
) {
    if (!str2 && !str3) {
        return !str.trim()
    }
    if (!str3) {
        return !str.trim() || !str2?.trim()
    }
    return !str.trim() || !str2?.trim() || !str3?.trim()
}
