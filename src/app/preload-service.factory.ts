import { LoadconfigService } from './loadconfig.service';

export function PreloadFactory(configService: LoadconfigService) {
  return () => configService.initialize();
}
