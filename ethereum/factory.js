import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x6983E06E9D4De0C2E55DfDA473439b13A336ca2E'
);

export default instance;
