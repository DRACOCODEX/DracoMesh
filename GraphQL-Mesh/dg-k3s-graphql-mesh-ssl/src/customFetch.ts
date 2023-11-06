import { MeshContext } from '@graphql-mesh/runtime';
import { fetch } from '@whatwg-node/fetch';
 
export default function patchedFetch(
	url: string,
	init: RequestInit,
	context: MeshContext
) {
	console.debug(url);
	// console.debug(init);
	// console.debug(context);

	// Set Authorization header dynamically to context value, or input cookie, or input header
	//init.headers["authorization"] = context.authorization;
	// Clean up headers forwarded to the Rest API
	//delete init.headers["authorization-cookie"];

	return fetch(url, init);
}