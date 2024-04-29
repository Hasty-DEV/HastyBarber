import { Select, MenuItem, FormControl, InputLabel, Checkbox, FormGroup, FormControlLabel, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { FormEvent } from "react";

const Schedule = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("Valores do formulário:", data);
    };

    return (
        <div>
            <h3>Agende seu horário</h3>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <FormControl fullWidth>
                    <InputLabel id="select-label">Selecione um horário</InputLabel>
                    <Select labelId="select-label" name="horario">
                        <MenuItem value="08:00">08:00</MenuItem>
                        <MenuItem value="09:00">09:00</MenuItem>
                        <MenuItem value="10:00">10:00</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <FormControl fullWidth>
                    <InputLabel id="barber-label">Selecione um barbeiro</InputLabel>
                    <Select labelId="barber-label" name="barbeiro">
                        <MenuItem value="barber1">Barbeiro 1</MenuItem>
                        <MenuItem value="barber2">Barbeiro 2</MenuItem>
                        <MenuItem value="barber3">Barbeiro 3</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <FormControl component="fieldset">
                    <FormGroup>
                        <FormControlLabel control={<Checkbox name="corteCabelo" />} label="Corte de cabelo" />
                        <FormControlLabel control={<Checkbox name="barba" />} label="Barba" />
                        <FormControlLabel control={<Checkbox name="pacoteCompleto" />} label="Pacote completo (Corte + Barba)" />
                    </FormGroup>
                </FormControl>
                <br />
                <DatePicker
                    label="Selecione uma data"
                    value={null}
                    name="data"
                />
                <br />
                <Button variant="contained" type="submit">Agendar</Button>
            </form>
        </div>
    );
};

export default Schedule;
