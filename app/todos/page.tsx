import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { createClient } from "@/utils/supabase/server";
import ClientComponent from "@/components/client-component";
import ServerComponent from "@/components/server-component";

export default async function Index() {

        
  return (
    <>
     
      <ServerComponent></ServerComponent>
      <ClientComponent></ClientComponent>
    </>
  );
}
