type EmailPayload = {
  to: string;
  from: string;
  subject: string;
  text: string;
};

export async function sendEmail(payload: EmailPayload) {
  if (!payload.to || !payload.from) {
    throw new Error("Email payload missing to/from");
  }

  console.info("Email dispatch", {
    to: payload.to,
    from: payload.from,
    subject: payload.subject,
  });
}
