const dev = {
	baseURL: "https://nutrifiai.com/",
	landingPageUrl: "https://nutrifiai.com/",
	stripe: {
		free: "price_1Mh0LjDGTWkyupJUJzVpKZp6",
		entry: "price_1MqKj2DGTWkyupJUvSpTFFRe",
		pro: "price_1MqKyVDGTWkyupJUux8mX5Td"
	},
};
  
const prod = {
	baseURL: '/api/',
	landingPageUrl: "https://nutrifiai.com",
	stripe: {
		free: "price_1Mh0LjDGTWkyupJUJzVpKZp6",
		entry: "price_1MqKj2DGTWkyupJUvSpTFFRe",
		pro: "price_1MqKyVDGTWkyupJUux8mX5Td"
	},
};
  
const config = process.env.NODE_ENV === 'development'
	? dev
	: prod;
  
export default config;