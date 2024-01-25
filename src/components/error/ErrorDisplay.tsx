type ErrorDisplayProps = {
    error: Error
}

export default function ErrorDisplay ({ error }: ErrorDisplayProps) {
    return <div className="text-center">
        <p>Erreur: {error.name} - {error.message}</p>
    </div>
}