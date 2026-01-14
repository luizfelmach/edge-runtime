Deno.serve(async (_req) => {
  // aguarda 5 segundos
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return new Response(
    JSON.stringify({
      ok: true,
      waited_seconds: 5,
      message: "Resposta após 5 segundos",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
});
