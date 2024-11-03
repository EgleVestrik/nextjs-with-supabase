import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { createClient } from "@/utils/supabase/server";

export default async function ServerComponent() {
    const supabase = await createClient();
    
    let { data: todos, error } = await supabase
    .from('todos')
    .select('*')

    if(!todos || todos.length == 0) return <h1>no todos</h1>;
        
  return (
    <>
     
      <main className="flex-1 flex flex-col gap-6 px-4">{JSON.stringify(todos)}
      </main>
    </>
  );
}
