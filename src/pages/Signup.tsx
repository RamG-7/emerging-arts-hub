import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import Seo from "@/seo/Seo";

const schema = z.object({ email: z.string().email(), password: z.string().min(6) });

type FormData = z.infer<typeof schema>;

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    toast({ title: "Demo only", description: "Authentication will be added later." });
    navigate("/");
  };

  return (
    <div className="container max-w-md">
      <Seo title="Sign up — The Gallery" description="Demo authentication stub." canonical="/signup" />
      <h1 className="text-2xl font-semibold mb-4">Create account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input type="email" placeholder="Email" aria-invalid={!!errors.email} {...register('email')} />
          {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <Input type="password" placeholder="Password" aria-invalid={!!errors.password} {...register('password')} />
          {errors.password && <p className="text-destructive text-sm mt-1">{errors.password.message}</p>}
        </div>
        <Button type="submit" className="w-full">Create account</Button>
      </form>
    </div>
  );
};

export default Signup;
