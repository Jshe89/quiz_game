import { NhostClient } from '@nhost/nextjs';

const config = {
	subdomain: process.env.NEXT_PUBLIC_SUB_DOMAIN,
	region: process.env.NEXT_PUBLIC_REGION,
};

const nhost = new NhostClient(config);

export default nhost;
