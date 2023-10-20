import avatar from './src/avatar.vue'
import { withInstall } from '../_utils/index'
export const DkAvatar = withInstall(avatar)
export type dkAvatarInterface = InstanceType<typeof avatar>
export default DkAvatar
