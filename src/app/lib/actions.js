'use server';

export async function createCita (formData) {
    const rawData = {
        nombre: formData.get('nombre')
    }

    console.log(rawData)
}