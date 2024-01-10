import { atom } from 'jotai'
type WizardStep = 'authentication' | 'reposiory' | 'pull request';
type ReviewStage = 'Not Reviewed' | 'In progress' | 'Completed';
export const step = atom<WizardStep>('authentication');
export const authorize = atom<boolean>(false)
export const reposiory = atom(null);
export const pullRequest = atom(null);
export const status = atom<ReviewStage>('Not Reviewed')
export const isNextDisabled = atom((get) => {
    if (get(step) === 'authentication') {
        return !get(authorize)
    }
    return false
})