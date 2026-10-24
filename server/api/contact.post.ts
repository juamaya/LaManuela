export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const subject = String(body?.subject ?? "").trim();
  const message = String(body?.message ?? "").trim();

  if (!name || !email || !subject || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: "Todos los campos son obligatorios.",
    });
  }

  if (
    name.length > 100 ||
    email.length > 254 ||
    subject.length > 150 ||
    message.length > 5000
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: "Uno o más campos superan el límite permitido.",
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: "El correo electrónico no es válido.",
    });
  }

  // Aquí puedes guardar el mensaje en una base de datos
  // o enviarlo por correo mediante un servicio SMTP.

  return {
    success: true,
    message: "Mensaje recibido correctamente.",
  };
});
