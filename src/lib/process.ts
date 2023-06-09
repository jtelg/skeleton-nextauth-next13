
export default function ProcessENV(index: string) {
  return process.env[index] || ''
}
