import { create } from 'zustand'

export const initialStore = {
    user: null,
    conversationList: [],
    teamList: [],
    activeTeamDetails: {},
    activeConversation: null
}

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
    activeConversation: null,
    updateActiveConversation: (newConversation: any) => set(() => ({
        activeConversation: newConversation
    })),
    resetStore: () => {
        set(initialStore);
    }
}))
