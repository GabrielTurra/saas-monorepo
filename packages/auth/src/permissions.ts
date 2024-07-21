import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { Role } from './@types/roles'
import { User } from './models/user'

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN(_, { can }) {
    can('manage', 'all')
  },

  MEMBER(_, { can }) {
    can('manage', 'Project')
  },

  BILLING(_, { can }) {
    can('manage', 'Project')
  },
}
