let instructor = []

export const useInstructor = () => instructor.slice()

export const getInstructor = () => {
    return fetch("http://localhost:8088/instructor")
    .then(response => response.json())
    .then(parsedInstructor => {
        instructor = parsedInstructor
    })
}