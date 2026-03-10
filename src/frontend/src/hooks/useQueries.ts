import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ReligiousPractice } from "../backend";
import { ExternalBlob } from "../backend";
import { useActor } from "./useActor";

// ─── Temple Prayers ──────────────────────────────────────────────────────────

export function usePrayersByRitualType(ritualType: string) {
  const { actor, isFetching } = useActor();

  return useQuery<ReligiousPractice[]>({
    queryKey: ["practices", "ritualType", ritualType],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getPracticesByRitualType(ritualType);
    },
    enabled: !!actor && !isFetching,
    staleTime: 60 * 1000,
  });
}

export interface AddPrayerParams {
  name: string;
  description: string;
}

export function useAddPrayer() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation<void, Error, AddPrayerParams>({
    mutationFn: async (params: AddPrayerParams) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.addPractice(
        params.name,
        params.description,
        "Prayer",
        ExternalBlob.fromURL(""),
        "Shiva",
        "Shaivism",
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["practices", "ritualType", "Prayer"],
      });
    },
  });
}
