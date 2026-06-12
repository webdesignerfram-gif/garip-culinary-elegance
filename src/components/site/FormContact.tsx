import { useState } from "react";
import { Send } from "lucide-react";

export function FormContact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">Demande de devis</h2>
      <p className="text-muted-foreground mb-10">Réponse personnalisée sous 24h ouvrées.</p>

      {sent ? (
        <div className="bg-card border border-primary p-10 text-center">
          <p className="font-display text-2xl text-primary">Merci !</p>
          <p className="mt-3 text-muted-foreground">Votre demande a bien été transmise. Nous vous recontactons très rapidement.</p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Nom complet" name="name" required />
            <Field label="Téléphone" name="phone" type="tel" required />
          </div>
          <Field label="Email" name="email" type="email" required />
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Type d'événement" name="event" placeholder="Mariage, anniversaire…" />
            <Field label="Nombre d'invités" name="guests" type="number" placeholder="50" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Budget estimé (€)" name="budget" type="number" placeholder="2000" />
            <div>
              <span className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                Souhaitez-vous un service de livraison ?
              </span>
              <div className="flex gap-3">
                {["Oui", "Non"].map((opt) => (
                  <label
                    key={opt}
                    className="flex-1 cursor-pointer bg-card border border-border px-4 py-3 text-foreground hover:border-primary transition-smooth has-[:checked]:border-primary has-[:checked]:bg-primary/5 flex items-center gap-3"
                  >
                    <input
                      type="radio"
                      name="delivery"
                      value={opt}
                      required
                      className="accent-primary"
                    />
                    <span className="text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div>
            <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
              Votre message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-smooth"
              placeholder="Date, lieu, régime alimentaire, cuisine souhaitée…"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-accent transition-smooth shadow-elegant"
          >
            Envoyer la demande
            <Send size={14} />
          </button>
        </form>
      )}
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-smooth"
      />
    </div>
  );
}
