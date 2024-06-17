import { create } from 'zustand'

// export interface Option {
//   value: string
//   label: string
//   disable?: boolean
//   /** fixed option that can't be removed. */
//   fixed?: boolean
//   /** Group the options by providing key. */
//   [key: string]: string | boolean | undefined
// }

// type FuzzieStore = {
//   googleFile: any
//   setGoogleFile: (googleFile: any) => void
//   slackChannels: Option[]
//   setSlackChannels: (slackChannels: Option[]) => void
//   selectedSlackChannels: Option[]
//   setSelectedSlackChannels: (selectedSlackChannels: Option[]) => void
// }

export const useGptStore = create()((set) => ({
    user: null,
    conversationList: [],
    updateUser: (newUser: any) => set(() => ({
        user: newUser
    })),
    updateConversationList: (newConversation: any) => set((state: any) => ({
        conversationList: [...state.conversationList, newConversation]
    })),
    teamList: [],
    activeTeamDetails: {},
    updateTeamList: (teamData: any) => set((state: any) => ({
        teamList: teamData
    })),
    updateActiveTeamDetails: (newTeam: any) => set(() => ({
        activeTeamDetails: newTeam
    })),
}))
