export async function POST({ setHeaders, request }) {
	let user = Object.fromEntries(await request.formData());
  console.log("logging in", user)

	return { location: '/success' };
}

