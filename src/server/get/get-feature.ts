import { IFeature } from '@/types';
import fetchApi from '@/utils/fetchApi';

export const getFeatures = async (): Promise<IFeature[]> =>
  fetchApi(`/portfolio/feature?feature_type=article&is_pagination=false`);
