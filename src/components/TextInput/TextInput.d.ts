export interface TextInputProps {
    placeholder?: string;
    type?: 'text' | 'email' | 'password';
    value: string;
    onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}